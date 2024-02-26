import {
  ApplicantIndividualCompanyPositionsQuery,
  ApplicantIndividualCompanyRelationsQuery,
} from "../generated/types";

export type RelationsType = ApplicantIndividualCompanyRelationsQuery["applicantIndividualCompanyRelations"];
export type PositionsType = ApplicantIndividualCompanyPositionsQuery["applicantIndividualCompanyPositions"];

export type DefaultData = {
  data: { name: string; id: string }[];
};
