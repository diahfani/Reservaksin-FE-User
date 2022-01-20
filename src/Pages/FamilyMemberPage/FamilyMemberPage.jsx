import React from "react";
import { FamilyData } from "./StaticData";
import CardFamily from "../../Components/CardFamily/CardFamily";
import BackButton from "../../Components/BackButton/BackButton";
import { useParams } from 'react-router-dom'

function FamilyMemberPage({userid}) {
  const { id } = useParams()
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Family Member" />
      <section className="py-3 fam-content">
        {FamilyData.map((item) => (
          <CardFamily key={item.id} data={item} />
        ))}
      </section>
    </div>
  );
}

export default FamilyMemberPage;
