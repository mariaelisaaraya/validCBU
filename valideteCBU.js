const isValidCBU = (cbu) => {
	if (isNaN(cbu) || cbu.length !== 22) {
		return {
			"el cbu tiene caracteres invalidos o no tiene 22 caracteres": cbu,
		};
	}

	const COD_BCRA = cbu.substring(0, 3);
	const SUCURSAL = cbu.substring(3, 7);
	const NRO_CUENTA = cbu.substring(8, 21);
	
	let verificador1 =
		COD_BCRA[0] * 7 +
		COD_BCRA[1] * 1 +
		COD_BCRA[2] * 3 +
		SUCURSAL[0] * 9 +
		SUCURSAL[1] * 7 +
		SUCURSAL[2] * 1 +
		SUCURSAL[3] * 3;
	verificador1 = (10 - (verificador1 % 10)) % 10;


	let verificador2 =
		NRO_CUENTA[0] * 3 +
		NRO_CUENTA[1] * 9 +
		NRO_CUENTA[2] * 7 +
		NRO_CUENTA[3] * 1 +
		NRO_CUENTA[4] * 3 +
		NRO_CUENTA[5] * 9 +
		NRO_CUENTA[6] * 7 +
		NRO_CUENTA[7] * 1 +
		NRO_CUENTA[8] * 3 +
		NRO_CUENTA[9] * 9 +
		NRO_CUENTA[10] * 7 +
		NRO_CUENTA[11] * 1 +
		NRO_CUENTA[12] * 3;
	verificador2 = (10 - (verificador2 % 10)) % 10;

	var CBU_GENERADO =
		COD_BCRA + SUCURSAL + verificador1 + NRO_CUENTA + verificador2;

	return cbu === CBU_GENERADO;
};


const pruebas = [
	"0290023-00000000157782",
	"0290023000.00000157782",
	"02900230000 0000157782",
	"029002300000000015",
	"ñ",
	"02900230000e0000157782",
	"029002300000880000157782",
	"0000003100007513536291",
	,	
];

for (var i in pruebas) {
	const cbu = pruebas[i];
	console.log(cbu, isValidCBU(cbu));
	console.log(" ");
	console.log(" ");
}

//Probar con cvu y cbu
