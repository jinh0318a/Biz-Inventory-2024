package com.callor.inventory.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.CommentDao;
import com.callor.inventory.model.CommentVO;
import com.callor.inventory.model.ManagerVO;

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
}
