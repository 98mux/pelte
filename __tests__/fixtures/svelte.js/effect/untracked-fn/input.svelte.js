let count = 1;
let double = $(count * 2);

$$(() => {
	console.log(
		count,
		$untrack(() => double)
	);
});
