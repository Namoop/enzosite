var data = []
for (var i = 0; i < writings_list.length; i++) { fetch(writings_list[i]).then(r=>r.text()).then(t=>addData(t)) }

function addData(x) {
	data.push(x);
	if (data.length == writings_list.length) {
		document.getElementById("accordion").innerHTML = ""
		insertHTML()
	}
}




function insertHTML() {
	for (var i = 0; i < writings_list.length; i++) {
		document.getElementById("accordion").innerHTML += `
		<div>
			<input type="checkbox" name="accordion" id="tab-${i+1}">
			<label for="tab-${i+1}" class="tab-title">${data[i].split('\n')[0].split('# ')[1]}</label>
			<div class="tab-content">
				${marked(data[i])}
				<p style="text-align: center;"><label for="tab-${i+1}" style="display: inline; padding: 2px 5px 2px; border: solid 2px  rgb(79, 133, 63); border-radius: 50px; background-color: rgb(32, 71, 20);">close tab</label></p>
			</div>
		</div>
		`
	}
}