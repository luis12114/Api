import conexion from "../database";

//Obtener todos los registros
export const findAllSliders = async (req, res) => {
  let sql = "SELECT * FROM slidermain";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

//Obtener un registro espercifico
export const findOneSlider = async (req, res) => {
  const { id } = req.params;
  let sql = `SELECT * FROM slidermain where id_sliderMain='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

//Crear un registro
export const createSlider = async (req, res) => {
  const { title, description, url_video, url_animation } = req.body;
  let sql = `INSERT INTO slidermain (title, description, url_video, url_animation) VALUES('${title}','${description}','${url_video}','${url_animation}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "slider creado" });
    }
  });
};

//Editar un registro
export const updateSlider = async (req, res) => {
  const { id } = req.params;
  const { title, description, url_video, url_animation } = req.body;
  let sql = `UPDATE slidermain SET 
  title='${title}', 
  description='${description}', 
  url_video='${url_video}', 
  url_animation='${url_animation}' 
  where id_sliderMain='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({status: "slider actualizado" });
    }
  });
};

//Elimniar un registro
export const delateSlider = async (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM slidermain  where id_sliderMain='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "slider eliminado" });
    }
  });
};
