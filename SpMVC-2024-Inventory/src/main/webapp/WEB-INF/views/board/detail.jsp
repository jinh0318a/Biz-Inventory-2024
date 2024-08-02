<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section>
	<div>${BOARD.b_title }</div>
	<div>${BOARD.b_writer }${BOARD.b_writed_at }</div>
	<div>${BOARD.b_body }</div>
	<div>
		<c:if test="${sessionScope.USER.u_id == BOARD.b_writer }">
			<a href="${rootPath }/board/update?b_code=${BOARD.b_code}"><input
				type="button" value="수정" /></a>
			<a href="${rootPath }/board/delete?b_code=${BOARD.b_code}"><input
				type="button" value="삭제" /></a>
		</c:if>
	</div>
	<div>
		<form method="post" action="${rootPath }/comment/input">
			<input type="hidden" name="c_boardcode" value="${BOARD.b_code }" />
			댓글 <input type="text" name="c_body" /><input type="submit"
				value="작성" />
			<c:forEach items="${COMMENTS }" var="one">
				<div>
					${one.c_body } ${one.c_writer } ${one.c_writed_at }
					<div>
						<c:if test="${sessionScope.MANAGER.m_id == one.c_writer }">
							<button>수정</button>
							<button>삭제</button>
						</c:if>
					</div>
				</div>
			</c:forEach>
		</form>
	</div>
	<div>
		<button>목록</button>
	</div>
</section>