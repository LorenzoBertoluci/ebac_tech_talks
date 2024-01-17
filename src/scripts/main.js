AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function() {
	const agora = new Date();
	const timeStampDoAtual = agora.getTime();

	const deltaTempo = timeStampDoEvento - timeStampDoAtual;

	const diasEmMS = 1000 * 60 * 60 * 24;
	const horasEmMS = 1000 * 60 * 60 ;
	const minutosEmMS = 1000 * 60 ;
	

	const deltaDias = Math.floor(deltaTempo / diasEmMS);
	const deltaHoras = Math.floor((deltaTempo % diasEmMS) / horasEmMS);
	const deltaMin = Math.floor((deltaTempo % horasEmMS) / minutosEmMS);
	const deltaSec = Math.floor((deltaTempo % minutosEmMS) / 1000);

	document.getElementById('contador').innerHTML = ` ${deltaDias}d ${deltaHoras}h ${deltaMin}m ${deltaSec}s `

	if (deltaTempo < 0) {
		document.getElementById('contador').innerHTML = `expirado`;
	}
},1000)