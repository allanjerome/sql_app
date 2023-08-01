// import React, { useState } from "react";
// import { Button, Container, Form, Alert } from "react-bootstrap";

// const TemplateStringApp = () => {
//   const [inputValues, setInputValues] = useState(Array(28).fill(""));
//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (index, value) => {
//     setInputValues((prevInputValues) => {
//       const newInputValues = [...prevInputValues];
//       newInputValues[index] = value;
//       return newInputValues;
//     });
//   };
// let result = inputValues.map((element) => {
//   if (element === "") {
//     return "null";
//   } else {
//     return element;
//   }
// });

// const handleSubmit = () => {
//   const templateString = `Insert into GL (INVNO,IDATE,DEBIT,CREDIT,BATCH,DESCR,CLOSING,SOURCE,MOVE_NO,MOVE_TYPE,UOM_QTY,CONV_FACTOR,GAL_QTY,REVERSED,PERIOD,ACCT,SUPPLIER_ID,CUST_ID,PURCH_CONT_NO,SLS_CONT_NO,DEST_TANK,SOURCE_TANK,UOM,REVERSAL_PERIOD,C_D,APDT_ID,ARDT_ID,CREATEDON) values ('${result.join(
//     ", '"
//   )}')`;
//     alert(templateString);
//     setShowAlert(true);
//   };

//   return (
//     <Container className="mt-5">
//       <h1>Template String App</h1>
//       <Form>
//         {inputValues.map((value, index) => (
//           <Form.Group key={index}>
//             <Form.Label>Input {index + 1}:</Form.Label>
//             <Form.Control
//               type="text"
//               value={value}
//               onChange={(e) => handleChange(index, e.target.value)}
//             />
//           </Form.Group>
//         ))}
//         <Button variant="primary" onClick={handleSubmit}>
//           INSERT
//         </Button>
//       </Form>
//       {showAlert && (
//         <Alert variant="success" className="mt-3">
//           Your template string has been displayed in the alert box.
//         </Alert>
//       )}
//     </Container>
//   );
// };

// export default TemplateStringApp;
//======================================================================================================

// import React, { useState } from "react";
// import { Button, Container, Form, Alert } from "react-bootstrap";

// const TemplateStringApp = () => {
//   const [inputValues, setInputValues] = useState(Array(28).fill(""));
//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (index, value) => {
//     setInputValues((prevInputValues) => {
//       const newInputValues = [...prevInputValues];
//       newInputValues[index] = value;
//       return newInputValues;
//     });
//   };

//   const handleSubmit = () => {
//     const templateString = `Insert into GL (INVNO,IDATE,DEBIT,CREDIT,BATCH,DESCR,CLOSING,SOURCE,MOVE_NO,MOVE_TYPE,UOM_QTY,CONV_FACTOR,GAL_QTY,REVERSED,PERIOD,ACCT,SUPPLIER_ID,CUST_ID,PURCH_CONT_NO,SLS_CONT_NO,DEST_TANK,SOURCE_TANK,UOM,REVERSAL_PERIOD,C_D,APDT_ID,ARDT_ID,CREATEDON) values ('${inputValues.join(
//       ", '"
//     )}')`;
//     alert(templateString);
//     setShowAlert(true);
//   };

//   //INVNO,IDATE,DEBIT,CREDIT,BATCH,DESCR,CLOSING,SOURCE,MOVE_NO,MOVE_TYPE,UOM_QTY,CONV_FACTOR,GAL_QTY,REVERSED,PERIOD,ACCT,SUPPLIER_ID,CUST_ID,PURCH_CONT_NO,SLS_CONT_NO,DEST_TANK,SOURCE_TANK,UOM,REVERSAL_PERIOD,C_D,APDT_ID,ARDT_ID,CREATEDON
// const lab = [
//   "INVNO",
//   "IDATE",
//   "DEBIT",
//   "CREDIT",
//   "BATCH",
//   "DESCR",
//   "CLOSING",
//   "SOURCE",
//   "MOVE_NO",
//   "MOVE_TYPE",
//   "UOM_QTY",
//   "CONV_FACTOR",
//   "GAL_QTY",
//   "REVERSED",
//   "PERIOD",
//   "ACCT",
//   "SUPPLIER_ID",
//   "CUST_ID",
//   "PURCH_CONT_NO",
//   "SLS_CONT_NO",
//   "DEST_TANK",
//   "SOURCE_TANK",
//   "UOM",
//   "REVERSAL_PERIOD",
//   "C_D",
//   "APDT_ID",
//   "ARDT_ID",
//   "CREATEDON",
// ];
//   for (i = 0; i < 28; i++) {
//     const customLabels = Array.from({ length: 28 }, (_, index) => lab[i]);
//   }
//   return (
//     <Container className="mt-5">
//       <h1>Template String App</h1>
//       <Form>
//         {customLabels.map((label, index) => (
//           <Form.Group key={index}>
//             <Form.Label>{label}:</Form.Label>
//             <Form.Control
//               type="text"
//               value={inputValues[index]}
//               onChange={(e) => handleChange(index, e.target.value)}
//             />
//           </Form.Group>
//         ))}
//         <Button variant="primary" onClick={handleSubmit}>
//           Show Template String
//         </Button>
//       </Form>
//       {showAlert && (
//         <Alert variant="success" className="mt-3">
//           Your template string has been displayed in the alert box.
//         </Alert>
//       )}
//     </Container>
//   );
// };

// export default TemplateStringApp;

import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import "./index.css";

const TemplateStringApp = () => {
  const [inputValues, setInputValues] = useState(Array(28).fill(""));
  const [showAlert, setShowAlert] = useState(false);
  const [text, setText] = useState();
  const handleChange = (index, value) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = value;
      return newInputValues;
    });
  };
  let result = inputValues.map((element) => {
    if (element === "") {
      return "null";
    } else {
      return element;
    }
  });
  //`"${element}"`
  const output = result
    .map((element) => {
      if (element !== "null") {
        return `"${element}"`;
      } else {
        return "null";
      }
    })
    .join(",");

  const handleSubmit = () => {
    const templateString = `Insert into GL (INVNO,IDATE,DEBIT,CREDIT,BATCH,DESCR,CLOSING,SOURCE,MOVE_NO,MOVE_TYPE,UOM_QTY,CONV_FACTOR,GAL_QTY,REVERSED,PERIOD,ACCT,SUPPLIER_ID,CUST_ID,PURCH_CONT_NO,SLS_CONT_NO,DEST_TANK,SOURCE_TANK,UOM,REVERSAL_PERIOD,C_D,APDT_ID,ARDT_ID,CREATEDON) values (${output})`;
    //result.join( ", '")
    // /alert(templateString);
    console.log(templateString);
    setShowAlert(true);
    setText(templateString);
    return templateString;
  };

  const customLabels = [
    "INVNO",
    "IDATE",
    "DEBIT",
    "CREDIT",
    "BATCH",
    "DESCR",
    "CLOSING",
    "SOURCE",
    "MOVE_NO",
    "MOVE_TYPE",
    "UOM_QTY",
    "CONV_FACTOR",
    "GAL_QTY",
    "REVERSED",
    "PERIOD",
    "ACCT",
    "SUPPLIER_ID",
    "CUST_ID",
    "PURCH_CONT_NO",
    "SLS_CONT_NO",
    "DEST_TANK",
    "SOURCE_TANK",
    "UOM",
    "REVERSAL_PERIOD",
    "C_D",
    "APDT_ID",
    "ARDT_ID",
    "CREATEDON",
  ];

  return (
    <Container className="mt-5">
      <h1>SQL query generator</h1>
      <Form>
        {customLabels.map((label, index) => (
          <Form.Group className="form-group" key={index}>
            <Form.Label>{label}:</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              value={inputValues[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleSubmit}>
          Show Template String
        </Button>
      </Form>
      {showAlert && (
        <Alert variant="success" className="mt-3 output" id="output">
          {text}
        </Alert>
      )}
    </Container>
  );
};

export default TemplateStringApp;
