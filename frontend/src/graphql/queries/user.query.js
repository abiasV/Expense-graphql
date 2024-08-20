import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
	query GetAuthenticatedUser {
		authUser {
			_id
			username
      name
      profilePicture
		}
	}
`;

export const GET_USER_AND_TRANSACTION = gql`
	query GetUserAndTransaction($userId: ID!) {
		user(userId: $userId) {
			_id
			username
      name
      profilePicture
			# relationships
			transactions {
				_id
				description
				paymentType
				category
				amount
				location
				date
			}
		}
	}
`