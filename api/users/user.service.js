const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into register(nom, prenom,  email, password, genre,telephone) 
                values(?,?,?,?,?,?)`,
      [
        data.nom,
        data.prenom,
        data.email,
        data.password,
        data.genre,
        data.telephone,
        data.id
      
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from register where email = ? `,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        
        
        return callBack(null, results[0]);
      }
    );
  },
  
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,nom,prenom,email,genre,telephone from register where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,nom,prenom,email,genre,telephone from register`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update register set nom=?, prenom=?, email=?, password=?, genre=?, telephone=? where id = ?`,
      [
        data.nom,
        data.prenom,
        data.email,
        data.password,
        data.genre,
        data.telephone,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from register where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};