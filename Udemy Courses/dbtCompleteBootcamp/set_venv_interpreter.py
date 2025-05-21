import sys
import os
import json

def main():
    python_path = sys.executable
    cwd = os.getcwd()
    
    print(f"\n🧠 Detected Python path: {python_path}")
    print(f"📂 Current working directory: {cwd}")

    # Safety check: is this Python inside the current folder (project-local venv)?
    if not os.path.commonpath([cwd, python_path]).startswith(cwd):
        print("⚠️ WARNING: The currently activated venv is NOT inside your current project folder!")
        print("   VS Code might still prefer another interpreter unless this one is explicitly set.")
    
    # Path to settings.json
    vscode_dir = os.path.join(cwd, ".vscode")
    os.makedirs(vscode_dir, exist_ok=True)
    settings_path = os.path.join(vscode_dir, "settings.json")

    # Load existing settings
    if os.path.exists(settings_path):
        try:
            with open(settings_path, "r") as f:
                settings = json.load(f)
        except json.JSONDecodeError:
            print("⚠️ Couldn't parse existing settings.json. Creating a new one.")
            settings = {}
    else:
        settings = {}

    # Set the correct interpreter path
    settings["python.defaultInterpreterPath"] = python_path

    # Write updated settings
    with open(settings_path, "w") as f:
        json.dump(settings, f, indent=4)

    print(f"\n✅ VS Code Python interpreter path successfully set to:\n   {python_path}")
    print(f"📝 Updated file: {settings_path}\n")

if __name__ == "__main__":
    main()
