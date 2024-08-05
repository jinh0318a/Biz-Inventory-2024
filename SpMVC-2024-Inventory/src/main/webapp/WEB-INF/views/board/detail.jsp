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
	<div class="writer button" data-b_code="${BOARD.b_code }">
		<c:if test="${sessionScope.USER.u_id == BOARD.b_writer }">
			<a href="${rootPath }/board/update?b_code=${BOARD.b_code}"><input
				type="button" value="수정" class="board update" /></a>
			<input type="button" value="삭제" class="board delete" />
		</c:if>
	</div>
	<div class="comment">
		<c:if test="${not empty sessionScope.MANAGER }">
			<form method="post" action="${rootPath }/comment/input"
				class="comment">
				<input type="hidden" name="c_boardcode" value="${BOARD.b_code }" />
				<div class="comment-input">
					<textarea name="c_body" class="comment body"></textarea>
					<input type="submit" value="작성" class="comment save" />
				</div>
			</form>
		</c:if>
		<c:forEach items="${COMMENTS }" var="one">
			<div class="writer">
				<span class="comment-text">${one.c_body }</span> ${one.c_writer }
				${one.c_writed_at }
				<div class="button">
					<c:if test="${sessionScope.MANAGER.m_id == one.c_writer }">
						<button class="btn-update" data-c_code="${one.c_code}"
							data-b_code="${one.c_boardcode }">수정</button>
						<button class="btn-delete" data-c_code="${one.c_code }"
							data-b_code="${one.c_boardcode }">삭제</button>
					</c:if>
				</div>
			</div>
		</c:forEach>
	</div>
	<div class="list">
		<div>
			<a href="${rootPath }/board/input"><input type="button"
				value="글 작성"></a>
		</div>
		<div>
			<a href="${rootPath }/board/list"><input type="button" value="목록"></a>
		</div>
	</div>
</section>