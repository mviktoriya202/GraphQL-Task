import { gql } from '@apollo/client';

const POSITION_QUERY = gql`
query applicantIndividualCompanyPositions($filter: QueryApplicantIndividualCompanyPositionsFilterFilterConditions, $orderBy: [QueryApplicantIndividualCompanyPositionsOrderByOrderByClause!] ) {
  applicantIndividualCompanyPositions(filter: $filter, orderBy:$orderBy) {
    data {
      id
      name
    }
  }
}
`;

export default POSITION_QUERY;
