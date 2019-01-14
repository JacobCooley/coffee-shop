export const validateEmail = (mail) =>
{
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
	{
		return (true)
	}
	return (false)
}

export const pick = (o, ...fields) => {
	return fields.reduce((a, x) => {
		if(o.hasOwnProperty(x)) a[x] = o[x];
		return a;
	}, {});
}