import { gql } from '@apollo/client';

const RELATION_QUERY = gql`
query applicantIndividualCompanyRelations($filter: QueryApplicantIndividualCompanyRelationsFilterFilterConditions, $orderBy: [QueryApplicantIndividualCompanyRelationsOrderByOrderByClause!] ) {
  applicantIndividualCompanyRelations(filter: $filter, orderBy:$orderBy) {
    data {
      id
      name
    }
  }
}
`;

export default RELATION_QUERY;