// tạo bản ghi
var currentIndex = 1;
function saveNumber() {
  var form_element = "";
  form_element +=
    '<p class="mt-5">Bản ghi số: ' +
    currentIndex +
    "</p>\n" +
    `<div class="row" onsubmit="return false">
      <div class="col-md-6">
      <label for="studentName" class="form-label">Full Name</label>
      <input type="text" name="fname" class="form-control" id="studentName" required/>
      </div>
      <div class="col-md-6">
      <label for="studentClass" class="form-label">Class Name</label>
      <input type="text" name="className" class="form-control" id="studentClass" required/>
      </div>
      <div class="col-12">
      <label for="point15p" class="form-label">Point 15p</label>
      <input type="number" name="point15p" class="form-control" id="point15p" value="0" required/>
      </div>
      <div class="col-12">
      <label for="lessonPoint" class="form-label">Lesson point</label>
      <input type="number" value="0" min="0" max="10" step="0.01" name="lessonPoint" class="form-control" id="lessonPoint" required/>
      </div>
      <div class="col-12">
      <label for="semesterGrade" class="form-label">Semester grades</label>
      <input type="number" min="0" max="10" step="0.01" name="semesterGrade" class="form-control" id="semesterGrade"  value="0" required/>
      </div>
      </div>`;

  document.getElementById("info_user").innerHTML = form_element;
}

var btn = document.getElementById("btn");
function test() {
  saveNumber();
}

// lưu bảng vào 1 mảng rồi in ra
var data = [];
var element = "";
function mySubmitFunction() {
  const maxValue = document.getElementById("inputValue").value;
  if (currentIndex == maxValue) {
    add_table(maxValue, 1);
    saveNumber();
    currentIndex += 1;
  } else if (maxValue > 0 && currentIndex < maxValue) {
    currentIndex += 1;
    add_table(maxValue, 0);
    saveNumber();
  }
}

function add_table(maxValue, done_check) {
  console.log(maxValue);
  if (maxValue > 0) {
    document.getElementById("content").innerHTML = "";
    var input1 = document.getElementsByName("fname")[0];
    var input2 = document.getElementsByName("className")[0];
    var input3 = document.getElementsByName("point15p")[0];
    var input4 = document.getElementsByName("lessonPoint")[0];
    var input5 = document.getElementsByName("semesterGrade")[0];
    // console.log(document.getElementsByName("fname")[0]);
    data.push({
      fname: input1.value,
      className: input2.value,
      point15p: input3.value,
      lessonPoint: input4.value,
      semesterGrade: input5.value,
    });
    console.log(data);
    if (done_check == 1) {
      for (let index = 0; index < data.length; index++) {
        var result =
          (parseFloat(data[index].point15p) +
            2 * parseFloat(data[index].lessonPoint) +
            3 * parseFloat(data[index].semesterGrade)) /
          6;
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
  }
  var textG = "";
  textG +=
    `<p>Total: (point15p + lessonPoint*2 + semesterGrade*3)/6 = ` + result;
  document.getElementById("demo").innerHTML = textG;
  console.log(1);
}
function validate(params) {
  if (params == "" || params == null || params == "undefined") {
    return 0;
  }
  return 1;
}
