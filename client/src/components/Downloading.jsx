import React from 'react';

export default function Downloading() {
  return (
    <div>

      <main>
        <form className="login">
          <div className="login_field">
            <label className="login_field_label">Your file:</label>
            <input type="file"></input>
          </div>
          <div className="login_field">
            <input type="submit" value="LogIn" />
          </div>
        </form>
      </main>
    </div>
  )
}
