<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<div>
	<img class="store picture"
		src="${rootPath }/static/image/picture-2008484_1280.png" alt="매장사진"
		title="매장사진" /> <span class="name">${STORE.s_name }</span><span>${STORE.s_addr }</span>
</div>
