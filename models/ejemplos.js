const bd = require('../utils/bd');
const dbService = require('../utils/dbService');

// const getAll = () => bd('titanic').select('*')
const getAll = () => dbService.getAll('usuarios');

const single = (id) => bd('titanic')
    .where('PassengerId', id)
    .select('Name', 'Age', 'Ticket');

const getJoin = () => bd('titanic')
    .innerJoin('antecedentes_medicos', 'antecedentes_medicos.PassengerId', 'titanic.PassengerId')
    .where({ 'titanic.Survived': false })
    .select('titanic.Name', 'titanic.Age', 'titanic.Ticket', 'antecedentes_medicos.fl_antec_cardiacos')

//     select
// 	a.PassengerId,
// 	a.Name,
// 	a.Age,
// 	b.fl_antec_cardiacos
// from titanic as a 
// inner join antecedentes_medicos as b on a.PassengerId = b.PassengerId;


module.exports = { getAll, single, getJoin };