import React from 'react';
import { Link } from 'react-router-dom';


export default function Profile() {
  return (
    <div>

      <main>
        <div className="grid">
          <Link to="/downloading" className="card">
              <h3>Загрузка &rarr;</h3>
              <p>Загрузить файл на сервер</p>
          </Link>
          <Link to="/downloading" className="card">
            <h3>Как это работает &rarr;</h3>
            <p>Описание функционала сервиса</p>
          </Link>
          <Link to="/downloading" className="card">

            <h3>Плеер &rarr;</h3>
            <p>Слушать музыку</p>
          </Link>
          <Link to="/downloading" className="card">
            <h3>Настройки &rarr;</h3>
            <p>
              Настройки профиля
              </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
