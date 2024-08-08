<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods list">
	<div>
		<h2>'${WORD }'검색 결과</h2>
	</div>
	<form class="search" action="${rootPath }/board/search">
		<input type="text" class="search" name="word"
			placeholder="검색하실 단어을 입력하세요" /> <input type="submit" class="button"
			value="검색" />
	</form>
	<div class="list">
		<c:choose>
			<c:when test="${not empty BOARDS }">
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
			</c:when>
			<c:otherwise>
				<h1>검색결과가 없습니다.</h1>
			</c:otherwise>
		</c:choose>
		<div>
			<a href="${rootPath }/board/input"><input type="button"
				class="board input" value="글작성" /></a>
		</div>
	</div>
</section>