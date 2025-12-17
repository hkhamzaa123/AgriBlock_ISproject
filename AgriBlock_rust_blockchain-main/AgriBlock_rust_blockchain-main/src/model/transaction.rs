use serde::{Deserialize, Serialize};

use super::Address;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Transaction {
    pub sender: Address,    // Represents "Batch ID" (e.g., WHEAT-001)
    pub recipient: Address, // Represents "Location/Actor" (e.g., WAREHOUSE-A)
    pub data: String,       // NEW: Represents "Agri Details" (JSON String)
    pub batch_id: String,
    pub event_type: String,
}
