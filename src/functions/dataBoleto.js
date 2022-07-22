const moment = require('moment')

const dataBoletoVencimento = (diasVencimento) => {
  const dataVencimento = moment().add(diasVencimento, 'days').format('YYYY-MM-DD')
  return dataVencimento
}

export default dataBoletoVencimento
