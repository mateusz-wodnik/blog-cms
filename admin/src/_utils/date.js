const date = (dateString, getDays=true, getHours=true) => {
	const d = new Date(dateString)
	const days = d.toDateString()
	const hours = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()}`
	if(getDays && !getHours) return days
	if(!getDays && getHours) return hours
	if(getDays && getHours) return `${days} ${hours}`
}

export default date
