import React from "react";
function RenderCVV({ nvien }) {
  return (
    <option key={nvien.id} value={nvien.name}>
      {nvien.name}
    </option>
  );
}
function ChucVuLoc(props) {
  const ab = props.Chucvu.map((cv) => {
    return <RenderCVV nvien={cv} />;
  });
  return ab;
}
export default ChucVuLoc;
