import { gql } from "@apollo/client";

const query = (path: 'Relations' | 'Positions') => {
  return gql`
    query applicantIndividualCompany${path}(
      $filter: QueryApplicantIndividualCompany${path}FilterFilterConditions
      $orderBy: [QueryApplicantIndividualCompany${path}OrderByOrderByClause!]
    ) {
      applicantIndividualCompany${path}(filter: $filter, orderBy: $orderBy) {
        data {
          id
          name
        }
      }
    }
  `;
};

export default query;
