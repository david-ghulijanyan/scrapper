// Թիմ եք ձեւավորում, որի համար ունեք 50 մասնակից եւ հարկավոր է, որ նրանցից ամեն մեկը առանձնազրույց ունենա (ծանոթանա) բոլոր մյուս մասնակիցների հետ։ Ամեն մի հանդիպման համար տրվում է 20 րոպե։ Պետք տարածք վարձեք, որտեղ կան առանձնացված  10 սենյակներ։ Նվազագյունը որքա՞ն ժամանակ է հարկավոր  վաձակալության համար։

function calculateTotalMeetingTime(participants, rooms, meetingDuration) {
	const totalMeetings = (participants * (participants - 1)) / 2;
	const rounds = Math.ceil(totalMeetings / rooms);
	const totalTime = rounds * meetingDuration;
	return totalTime;
}

const participants = 50;
const rooms = 10;
const meetingDuration = 20;

const totalRentalTime = calculateTotalMeetingTime(participants, rooms, meetingDuration);

console.log(`Total rental time is ${totalRentalTime} minutes, which is ${totalRentalTime / 60} hours.`);
// Total rental time is 2460 minutes, which is 41 hours.