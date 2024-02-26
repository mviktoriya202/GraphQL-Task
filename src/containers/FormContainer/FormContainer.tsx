import { useLazyQuery } from "@apollo/client";
import CustomSelect from "../../components/CustomSelect";
import TextFields from "../../components/TextFields";
import {
  ApplicantIndividualCompanyPositionsQuery,
  ApplicantIndividualCompanyPositionsQueryVariables,
  ApplicantIndividualCompanyRelationsQuery,
  ApplicantIndividualCompanyRelationsQueryVariables,
} from "../../generated/types";
import query from "../../graphql/query.graphql";
import { PositionsType, RelationsType } from "../../types";
import Loader from "../../components/Loader";

function FormContainer() {
  const [
    getRelations,
    { data: relations, loading: relLoading, error: relError },
  ] = useLazyQuery<
    ApplicantIndividualCompanyRelationsQuery,
    ApplicantIndividualCompanyRelationsQueryVariables
  >(query("Relations"));

  const [
    getPositions,
    { data: positions, loading: posLoading, error: posError },
  ] = useLazyQuery<
    ApplicantIndividualCompanyPositionsQuery,
    ApplicantIndividualCompanyPositionsQueryVariables
  >(query("Positions"));

  const handleOnGetRelations = () => {
    if (!relations) {
      getRelations();
    }
  };

  const handleOnGetPositions = () => {
    if (!positions) {
      getPositions();
    }
  };

  if(posLoading || relLoading) return <Loader />
  
  return (
    <div>
        <CustomSelect<RelationsType, "Relations">
          handleOnGetData={handleOnGetRelations}
          data={relations?.applicantIndividualCompanyRelations}
          type="Relations"
          error={relError}
          isMultiple={true}
        />
        <CustomSelect<PositionsType, "Positions">
          isMultiple={false}
          handleOnGetData={handleOnGetPositions}
          data={positions?.applicantIndividualCompanyPositions}
          type="Positions"
          error={posError}
        />
      <TextFields />
    </div>
  );
}

export default FormContainer;
