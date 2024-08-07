<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<div>
	<iframe src="${MAP }" width="600" height="450" style="border: 0;"
		allowfullscreen="" loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"></iframe>
	<span class="name">${STORE.s_name }</span><span>${STORE.s_addr }</span>
</div>
