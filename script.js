// 글꼴 선택기
document.getElementById('font-selector').addEventListener('change', function() {
    document.getElementById('editor-section').style.fontFamily = this.value;
  });

// 글꼴 크기 선택기
document.getElementById('font-size-selector').addEventListener('change', function() {
    document.getElementById('editor-section').style.fontSize = this.value;
  });

/*
function loadTemplate(templateId) {
    var templateSrc = element.getAttribute('data-template'); // 이미지 경로 가져오기

    // 템플릿 ID에 따라 다른 템플릿을 로드하는 함수
    // AJAX 요청 사용 필요, 템플릿 HTML 파일을 직접 로드 코드 작성. (후자일 확률이 높음)

    var editorSection = document.getElementById('editor-section');
    // 편집창에 큰 이미지로 표시

    editorSection.innerHTML = '<img src="' + templateSrc + '" alt="템플릿" style="width: 100px; height: 100px;" />';
  }
*/

function loadTemplate(thumbnailDiv) {
    var imgSrc = thumbnailDiv.querySelector('img').src; // 클릭된 썸네일의 이미지 소스 가져오기.
    var editorSection = document.getElementById('editor-section');
    // 편집창에 이미지를 3배 크기로 표시
    editorSection.innerHTML = '<img src="' + imgSrc + '" alt="템플릿" style="width: 900px; height: auto;" />';
}