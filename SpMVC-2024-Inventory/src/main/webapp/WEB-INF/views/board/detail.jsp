<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="board detail">
	<div class="board">
		<div>${BOARD.b_title }</div>
		<div class="writer">${BOARD.b_writer }${BOARD.b_writed_at }</div>
		<div>${BOARD.b_body }</div>
	</div>
	<div>
		<c:if test="${sessionScope.USER.u_id == BOARD.b_writer }">
			<a href="${rootPath }/board/update?b_code=${BOARD.b_code}"><input
				type="button" value="수정" class="update button" /></a>
			<a href="${rootPath }/board/delete?b_code=${BOARD.b_code}"><input
				type="button" value="삭제" class="delete button" /></a>
		</c:if>
	</div>
	<div>
		<form method="post" action="${rootPath }/comment/input">
			<input type="hidden" name="c_boardcode" value="${BOARD.b_code }" />
			<div class="comment-input">
				<textarea rows="4" cols="50" name="c_body"></textarea>
				<input type="submit" value="작성" />
			</div>
		</form>
		<c:forEach items="${COMMENTS }" var="one">
			<div id="comment-${one.c_code}">
				<span class="comment-text">${one.c_body }</span> ${one.c_writer }
				${one.c_writed_at }
				<div>
					<c:if test="${sessionScope.MANAGER.m_id == one.c_writer }">
						<button class="edit-btn" data-code="${one.c_code}">수정</button>
						<a href="${rootPath }/comment/delete?c_code=${one.c_code}"><input
							type="button" value="삭제"></a>
					</c:if>
				</div>
			</div>
		</c:forEach>

	</div>
	<div class="list">
		<a href="${rootPath }/board/list"><input type="button" value="목록"></a>
	</div>
</section>