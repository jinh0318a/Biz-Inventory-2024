<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods input">
	<div>상품코드 ${GOOD.g_code }</div>
	<div>상품명 ${GOOD.g_name }</div>
	<div>재고 ${GOOD.g_count }</div>
	<div>가격 ${GOOD.g_price }</div>
</section>