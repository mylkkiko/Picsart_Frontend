export const requierdValidator = {
    required: "This field is requierd"
}

export const salaryValidator = {
    required: "Please fill your salary",
    min: {value: 60000, message: "salary should be higher"},
    max: {value: 80000, message: "salary should be close to the brain"},
    setValueAs: (p:string) => +p
}