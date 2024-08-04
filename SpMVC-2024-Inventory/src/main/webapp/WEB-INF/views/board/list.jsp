<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods list">
	<div>
		<h2>전체 글 목록</h2>
	</div>
	<div class="list">
		<table class="board list">
			<thead>
				<tr>
					<th>작성자</th>
					<th>제목</th>
					<th>작성일</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${BOARDS }" var="one">
					<tr data-b_code="${one.b_code }">
						<td>${one.b_writer }</td>
						<td>${one.b_title }</td>
						<td>${one.b_writed_at }</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<div>
			<a href="${rootPath }/board/input"><input type="button" class="board input"
				value="글작성" /></a>
		</div>
	</div>
</section>