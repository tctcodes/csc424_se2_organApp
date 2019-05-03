import decode from "jwt-decode";
export const decodeToken =(token)=>{
    const decoded = decode(token);
    const {exp} = decoded;
    let patientType; 
    let role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    const name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    if(role == 'staff'){
      return {
        exp,
        role,
        name
      };
    }
    else{
      patientType = role
      role = 'client';
      return{
        name,
        role,
        patientType,
        exp
      }
    }
  
  }