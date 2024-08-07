package com.callor.inventory.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.callor.inventory.dao.CommentDao;
import com.callor.inventory.model.CommentVO;
import com.callor.inventory.model.ManagerVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/comment")
public class CommentController {

	private final CommentDao commentDao;

	public CommentController(CommentDao commentDao) {
		super();
		this.commentDao = commentDao;
	}

	@RequestMapping(value = "/input", method = RequestMethod.POST)
	public String input(CommentVO comment, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/login";
		}
		comment.setC_writer(manager.getM_id());
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String writed_at = format.format(date);
		comment.setC_writed_at(writed_at);
		commentDao.insert(comment);
		return "redirect:/board/detail?b_code=" + comment.getC_boardcode();
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(CommentVO commentVO, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/login";
		}
		CommentVO comment = commentDao.findByCode(commentVO.getC_code());
		if (commentVO.getC_body() == null) {
			commentVO.setC_body(comment.getC_body());
		}
		commentVO.setC_writer(manager.getM_id());
		commentVO.setC_writed_at(comment.getC_writed_at());
		commentDao.update(commentVO);
		String b_code = commentVO.getC_boardcode();
		return "redirect:/board/detail?b_code=" + b_code;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String delete(String c_code, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/login";
		}
		CommentVO comment = commentDao.findByCode(c_code);
		commentDao.delete(c_code);
		return "redirect:/board/detail?b_code=" + comment.getC_boardcode();
	}

}
