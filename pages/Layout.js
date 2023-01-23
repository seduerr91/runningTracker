import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Flex } from '@aws-amplify/ui-react'

function Layout(props) {

	const variants = {
		hidden: { opacity: 0, x: 0, y: 200 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	}

	return (

		<Fragment>
			<Flex direction='column' gap='0' paddingTop='1rem' paddingBottom='1rem'>
				<motion.main variants={variants} initial='hidden' animate='enter' exit='exit' transition={{ type: 'linear', duration: 1 }}>
					{props.children}
				</motion.main>
			</Flex>

		</Fragment>
	)
}

export default Layout