#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#[tauri::command]
fn launcher_info()->serde_json::Value{serde_json::json!({"name":"Sakura Launcher","version":"0.1.0","status":"foundation"})}
fn main(){tauri::Builder::default().invoke_handler(tauri::generate_handler![launcher_info]).run(tauri::generate_context!()).expect("error while running Sakura Launcher");}
