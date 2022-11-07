// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";
// import { Box, FormControl, MenuItem } from "@mui/material";

// function Select(props) {
//   const { label, name, options, formik, ...rest } = props;
//   return (
//     <div className="input-item">
//       {/* <label htmlFor={name}>{label}</label> */}
//       {/* {/* <Field as="select" id={name} name={name} {...rest}> */}
//         {options.map((option) => {
//           return (
//             <option key={option.value} value={option.value}>
//               {option.key}
//             </option>
//           );
//         })}
//       </Field> */}

//       {/* sec */}

//       <Box sx={{ minWidth: 120 }}>
//         <FormControl fullWidth>
//           {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
//           <Field as="select" id={name} name={name} {...rest}>
//             <option value="">seelect Name</option>

//             <option value="raheel">Raheel</option>
//             <option value="rasim">Rasim</option>
//             <option value="asim">Asim</option>
//           </Field>
//         </FormControl>
//       </Box>
//       <ErrorMessage component={TextError} name={name} />
//     </div>
//   );
// }

// export default Select;
