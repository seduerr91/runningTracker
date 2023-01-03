/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      createdAt
      prompt
      result
      type
      experience
      education
      username
      company
      role
      requirements
      author
      status
      misc
      updatedAt
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        prompt
        result
        type
        experience
        education
        username
        company
        role
        requirements
        author
        status
        misc
        updatedAt
      }
      nextToken
    }
  }
`;
export const applicationsByUsername = /* GraphQL */ `
  query ApplicationsByUsername(
    $username: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    applicationsByUsername(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        prompt
        result
        type
        experience
        education
        username
        company
        role
        requirements
        author
        status
        misc
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriptions = /* GraphQL */ `
  query GetSubscriptions($id: ID!) {
    getSubscriptions(id: $id) {
      id
      subscriptionId
      customerEmail
      priceId
      eventType
      createdAt
      updatedAt
      status
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subscriptionId
        customerEmail
        priceId
        eventType
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
`;
export const statusByCustomerEmail = /* GraphQL */ `
  query StatusByCustomerEmail(
    $customerEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    statusByCustomerEmail(
      customerEmail: $customerEmail
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subscriptionId
        customerEmail
        priceId
        eventType
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
`;
