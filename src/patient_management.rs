use casper_contract::contract_api::storage;
use casper_types::{
    runtime_args, CLType, CLTyped, EntryPoint, EntryPointAccess, EntryPointType, EntryPoints, Key,
    Parameter, RuntimeArgs, URef, U256,
};

#[derive(Default)]
struct Patient {
    id: U256,
    name: String,
    age: u8,
    medical_record: String,
}

pub struct PatientManagement {
    patients: Vec<Patient>,
}

impl PatientManagement {
    pub fn new() -> Self {
        PatientManagement {
            patients: Vec::new(),
        }
    }

    pub fn add_patient(&mut self, id: U256, name: String, age: u8, medical_record: String) {
        let patient = Patient {
            id,
            name,
            age,
            medical_record,
        };
        self.patients.push(patient);
    }

    pub fn get_patient(&self, id: U256) -> Option<&Patient> {
        self.patients.iter().find(|&p| p.id == id)
    }
}

#[no_mangle]
pub extern "C" fn call() {
    let patient_management = PatientManagement::new();
    let uref = storage::new_uref(patient_management);
    runtime::put_key("patient_management", uref.into());
}
