import { Heading, Flex, TextField, Text, Button, Card, SwitchField } from '@aws-amplify/ui-react'
import { useState, useEffect } from 'react'
import '@aws-amplify/ui-react/styles.css'

function Home() {
  
  const [distance_run_from_storage, set_distance_run_from_storage] = useState(0)  
  const [goal_from_storage, set_goal_from_storage] = useState()
  const [isChecked, setIsChecked] = useState(false)


  useEffect(() => {
    set_goal_from_storage(window.localStorage.getItem("goal"))
    set_distance_run_from_storage(window.localStorage.getItem("ran"))
  }, [])

  // date related snippets
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var yyyy = today.getFullYear()
  
  const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
  const dayOfWeek = weekday[today.getDay()]
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
  var curMonth = months[today.getMonth()]
  const todayNiceFormat = curMonth + ' ' + dd + ', ' + yyyy

  const total_days = 365
  const first_of_year = new Date('01/01/2023')
  var days_passed = Math.ceil((today.getTime() - first_of_year.getTime()) / (1000 * 3600 * 24))
  
  const days_left = total_days - days_passed

  let total_distance
  let distance_run
  let goal
  if (isChecked === true) {
    total_distance = Math.round(goal * 1.609 * 100 ) / 100
    distance_run = Math.round(distance_run_from_storage * 1.609 * 100) / 100
  } else {
    total_distance = goal_from_storage
    distance_run = Math.round(distance_run_from_storage * 100) / 100
  }
  
  const units_left = total_distance - distance_run
  
  const target_distance = Math.round(total_distance / total_days * days_passed * 100) /100
  const target_difference = Math.round((distance_run - target_distance) * 100) /100
  const units_per_day_left = Math.round(units_left / days_left * 100) /100
  const days_ahead = Math.round((target_difference / units_per_day_left) * 100) /100

  const relative_run_progress = Math.round(distance_run / target_distance * 100) / 1
  const daily_average_ytd = Math.round(distance_run / days_passed * 100) /100
  
  var number_left_running_days = Math.round(units_left/daily_average_ytd)
  var linear_finish_timestamp_ms = today.setDate(today.getDate() + number_left_running_days)
  var linear_finish_timestamp_date_object = new Date(linear_finish_timestamp_ms)

  var ldd = String(linear_finish_timestamp_date_object.getDate()).padStart(2, '0')
  var lmm = String(linear_finish_timestamp_date_object.getMonth() + 1).padStart(2, '0')
  var lyyyy = linear_finish_timestamp_date_object.getFullYear()
  
  var linear_finish_formatted = lmm + '/' + ldd + '/' + lyyyy

  var linear_hypothetical_distance = Math.round(distance_run + (days_left * daily_average_ytd))
  
  function updateRan (e) {
    const distance = e.target.distance.value
    window.localStorage.setItem("ran", distance)
    
    console.log('Value: ', e.target.goal.value)
    console.log('From storage', goal_from_storage)
    
    let goal
    if ( e.target.goal.value === '' ) {
      goal = goal_from_storage
    } else {
      goal = e.target.goal.value
    }
    window.localStorage.setItem("goal", goal)
  }

  return (
    <Flex direction="column" alignItems='center' justifyContent='center'>
      {/* Input */}
      <Flex as='form' alignItems='center' direction='column' justifyContent='center' onSubmit={updateRan}>
        <Flex direction='row' alignItems='center' justifyContent='center'>
          <TextField name='distance' placeholder='Distance' size='small' width='30%'></TextField>
          <Button variation='primary' size='small' width='30%' type='submit'>Calc</Button>
        </Flex>
      </Flex>

      <Card width='90%'>
        <Flex direction='column' alignItems='center'>
          <Text>Today is {dayOfWeek}, {todayNiceFormat}</Text>
          <Text>{days_passed} days passed this year</Text>
          <Text>I got {days_left} days left to run {goal_from_storage} miles</Text>
        </Flex>
      </Card>

      <Card width='90%'>
        <Flex direction='column' alignItems='center'>
          <Flex direction='row' alignItems='center'>
          <Text>Distance Run: {distance_run} | Distance Left: {units_left}</Text>
          </Flex> 
        </Flex>
        <Flex direction='column' alignItems='center' paddingTop='1rem'>

          <Flex direction='row'>
            <Flex direction='column'>
              <Text>Relative Progress: {relative_run_progress}%</Text>
              <Text>Target Distance: {target_distance}</Text>        
              <Text>Target Difference: {target_difference}</Text>
            </Flex>
            <Flex direction='column'>
              <Text>Days Ahead: {days_ahead}</Text>
              <Text>Units per Day left: {units_per_day_left}</Text>
              <Text>Daily average YTD: {daily_average_ytd}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      
      <Card width='90%'>
        <Flex direction='column' alignItems='center'>
          <Heading>Theoretically ...</Heading>
          <Text>I'll be done by {linear_finish_formatted}, and would</Text>
          <Text>run up to {linear_hypothetical_distance} units until Dec 31.</Text>
        </Flex>
      </Card>   

      <Flex direction='column' justifyContent='center' alignItems='center'>
          
          <Flex alignItems='center' justifyContent='center'>
            <Text>Change Annual Distance Goal</Text>
            <TextField name='goal' placeholder={ goal_from_storage ||'Yearly goal'} size='small' width='30%'></TextField>
          </Flex>
      
          <Flex direction='row'>
            <Text>Miles</Text>
              <SwitchField isChecked={isChecked} onChange={(e) => {setIsChecked(e.target.checked)}}/>
            <Text>Kilometers</Text>
          </Flex>

      </Flex>

  </Flex>

  )

}

export default Home