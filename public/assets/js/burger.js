$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();
		const burgerName = $("#burger").val();
		submitData(burgerName);
		$("#burger").val("");
		location.reload();
	});
	function submitData(burger) {
		const settings = {
			url: "/",
			method: "POST",
			timeout: 0,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ burger_name: burger }),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
	}
	$(".devour").on("click", function (e) {
		e.preventDefault();
		console.log(`devour clicked`);
        console.log(e.currentTarget.id);
        const settings = {
			url: "/",
			method: "PATCH",
			timeout: 0,
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify({ id: e.currentTarget.id }),
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
        location.reload();
	});
	$("#clearAll").on("click", function () {
		const settings = {
			url: "/",
			method: "DELETE",
			timeout: 0,
		};
		$.ajax(settings).done(function (response) {
			console.log(response);
		});
        location.reload();
	});
});