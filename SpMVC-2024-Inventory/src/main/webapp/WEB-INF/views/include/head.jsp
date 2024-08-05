<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>재고 확인 사이트</title>
<link href="${rootPath }/static/css/main.css" rel="stylesheet">
<link href="${rootPath }/static/css/join.css" rel="stylesheet">
<link href="${rootPath }/static/css/login.css" rel="stylesheet">
<link href="${rootPath }/static/css/user/join.css" rel="stylesheet">
<link href="${rootPath }/static/css/user/login.css" rel="stylesheet">
<link href="${rootPath }/static/css/user/modify.css" rel="stylesheet">
<link href="${rootPath }/static/css/manager/join.css" rel="stylesheet">
<link href="${rootPath }/static/css/manager/login.css" rel="stylesheet">
<link href="${rootPath }/static/css/manager/modify.css" rel="stylesheet">
<link href="${rootPath }/static/css/store/list.css" rel="stylesheet">
<link href="${rootPath }/static/css/goods/list.css" rel="stylesheet">
<link href="${rootPath }/static/css/board/detail.css" rel="stylesheet">
<link href="${rootPath }/static/css/board/input.css" rel="stylesheet">
<script>
	// JSP 에서 선언된 rootPath 변수를 *.js 파일에서 사용할 수 있도록 JS 의 변수로 선언하기
	const rootPath = "${rootPath}"
</script>
<script src="${rootPath }/static/js/main.js"></script>
<script src="${rootPath }/static/js/user/join.js"></script>
<script src="${rootPath }/static/js/user/login.js"></script>
<script src="${rootPath }/static/js/user/modify.js"></script>
<script src="${rootPath }/static/js/manager/login.js"></script>
<script src="${rootPath }/static/js/manager/join.js"></script>
<script src="${rootPath }/static/js/manager/modify.js"></script>
<script src="${rootPath }/static/js/store/list.js"></script>
<script src="${rootPath }/static/js/goods/list.js"></script>
<script src="${rootPath }/static/js/board/list.js"></script>
<script src="${rootPath }/static/js/board/comment.js"></script>
<script src="${rootPath }/static/js/board/input.js"></script>
<script src="${rootPath }/static/js/board/delete.js"></script>
</head>