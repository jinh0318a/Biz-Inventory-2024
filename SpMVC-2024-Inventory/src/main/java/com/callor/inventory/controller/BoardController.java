package com.callor.inventory.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.BoardDao;
import com.callor.inventory.dao.CommentDao;
import com.callor.inventory.model.BoardVO;
import com.callor.inventory.model.CommentVO;
import com.callor.inventory.model.UserVO;

@Controller
@RequestMapping(value = "/board")
public class BoardController {

	private final BoardDao boardDao;
	private final CommentDao commentDao;

	public BoardController(BoardDao boardDao, CommentDao commentDao) {
		super();
		this.boardDao = boardDao;
		this.commentDao = commentDao;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<BoardVO> boardList = boardDao.findAll();
		model.addAttribute("BOARDS", boardList);
		return null;
	}

	@RequestMapping(value = "/input", method = RequestMethod.GET)
	public String input(HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("USER");
		if (user == null) {
			return "redirect:/user/login-user";
		}
		return null;
	}

	@RequestMapping(value = "/input", method = RequestMethod.POST)
	public String input(BoardVO boardVO, HttpSession session, Model model) {
		UserVO user = (UserVO) session.getAttribute("USER");
		if (user == null) {
			return "redirect:/user/login-user";
		}

		boardVO.setB_writer(user.getU_id());
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String writed_at = format.format(date);
		boardVO.setB_writed_at(writed_at);

		boardDao.insert(boardVO);

		return "redirect:/board/list";
	}

	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String detail(String b_code, Model model) {
		BoardVO board = boardDao.findByCode(b_code);
		List<CommentVO> comments = commentDao.findByBoard(b_code);
		model.addAttribute("BOARD", board);
		model.addAttribute("COMMENTS", comments);
		return null;
	}

	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String update(String b_code, HttpSession session, Model model) {
		UserVO user = (UserVO) session.getAttribute("USER");
		if (user == null) {
			return "redirect:/user/login-user";
		}
		BoardVO board = boardDao.findByCode(b_code);
		model.addAttribute("BOARD", board);

		return null;
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(BoardVO boardVO, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("USER");
		if (user == null) {
			return "redirect:/user/login-user";
		}
		boardDao.update(boardVO);

		return "redirect:/board/detail?b_code=" + boardVO.getB_code();
	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String delete(String b_code, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("USER");
		if (user == null) {
			return "redirect:/user/login-user";
		}
		boardDao.delete(b_code);

		return "redirect:/board/list";
	}
}
