<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항</title>
<link href="${rootPath }/static/css/popup.css" rel="stylesheet">
</head>
<body>
	<section class="popup">
		<h1>공지사항</h1>
		<div>
			<h2>[둔산직매장] 재고 상황 안내</h2>
			<p>안녕하세요, 고객님! 저희 [둔산직매장]을 이용해 주셔서 감사합니다.</p>
			<p>현재 몇 가지 제품의 재고 상황에 대해 안내드리고자 합니다.</p>
			<p>
				<span>단호박</span> : 인기 상품인 <span>단호박</span>의 재고가 빠르게 소진되고 있습니다. 현재 <span>1</span>개
				남아 있으며, 다음 입고 예정일은 <span>2024-08-13</span>입니다.
			</p>
			<p>
				<span>상추</span> : <span>상추</span>는 현재 품절 상태입니다. 재입고 예정일은 <span>2024-08-12</span>이며,
				입고 후 신속하게 안내드리겠습니다.
			</p>
			<p>
				<span>꿀떡</span> : <span>꿀떡</span>은 정상적으로 재고가 유지되고 있으니, 필요한 고객님께서는
				편리하게 구매하실 수 있습니다.
			</p>
			<p>저희는 고객님들께서 필요한 제품을 적시에 제공할 수 있도록 최선을 다하고 있습니다.</p>

			<p>추가적인 문의 사항이나 도움 필요하시면 언제든지 매장 내 고객 서비스 데스크로 문의해 주시기 바랍니다.</p>
			<p>감사합니다.</p>
			<p>[둔산직매장] 드림</p>

		</div>
		<input type="button" value="닫 기" onclick="self.close();" />
	</section>
</body>
</html>