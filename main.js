function saveNumber(value) {
  var form_element = "";
  for (let index = 0; index < value; index++) {
    form_element +=
      '<p class="mt-5">Bản ghi số: ' +
      (index + 1) +
      "</p>\n" +
      `<div class="row" onsubmit="return false">
    <div class="col-md-6">
      <label for="studentName" class="form-label">Full Name</label>
      <input type="text" name = "fname[]" class="form-control" id="studentName" />
    </div>
    <div class="col-md-6">
      <label for="studentClass" class="form-label">Class Name</label>
      <input type="text" name = "className[]" class="form-control" id="studentClass" />
    </div>
    <div class="col-12">
      <label for="point15p" class="form-label">Point 15p</label>
      <input type="number" min="0" max="10" step="0.01" name = "point15p[]" class="form-control" id="point15p" />
    </div>
    <div class="col-12">
      <label for="lessonPoint" class="form-label">Lesson point</label>
      <input type="number" min="0" max="10" step="0.01" name = "lessonPoint[]" class="form-control" id="lessonPoint"/>
    </div>
    <div class="col-12">
      <label for="semesterGrade" class="form-label">Semester grades</label>
      <input type="number" min="0" max="10" step="0.01" name = "semesterGrade[]" class="form-control" id="semesterGrade" />
    </div>
  </div>`;
  }
  document.getElementById("info_user").innerHTML = form_element;
}

function mySubmitFunction(event) {
  event.preventDefault();
  document.getElementById("content").innerHTML = "";
  var input1 = document.getElementsByName("fname[]");
  var input2 = document.getElementsByName("className[]");
  var input3 = document.getElementsByName("point15p[]");
  var input4 = document.getElementsByName("lessonPoint[]");
  var input5 = document.getElementsByName("semesterGrade[]");
  var data = [];
  for (var i = 0; i < input1.length; i++) {
    data.push({
      fname: input1[i].value,
      className: input2[i].value,
      point15p: input3[i].value,
      lessonPoint: input4[i].value,
      semesterGrade: input5[i].value,
    });
  }
  var element = "";
  for (let index = 0; index < data.length; index++) {
    var result =
      (parseFloat(data[index].point15p) +
        2 * parseFloat(data[index].lessonPoint) +
        3 * parseFloat(data[index].semesterGrade)) /
      6;
    console.log(typeof result);
    var text = "Yếu";
    if (result > 8 && result <= 10) {
      text = "Giỏi";
    } else if (result > 6.5 && result <= 8) {
      text = "Khá";
    } else if (result > 5 && result < 6.5) {
      text = "TB";
    }
    element +=
      "<tr>\n" +
      "<td>" +
      data[index].fname +
      "</td>" +
      "<td>" +
      data[index].className +
      "</td>" +
      "<td>" +
      data[index].point15p +
      "</td>" +
      "<td>" +
      data[index].lessonPoint +
      "</td>" +
      "<td>" +
      data[index].semesterGrade +
      "</td>" +
      "<td>" +
      result.toFixed(2) +
      "</td>" +
      "<td>" +
      text +
      "</td>" +
      "<tr>\n";
    // console.log(data[index].semesterGrade);
  }
  document.getElementById("content").innerHTML = element;
}
