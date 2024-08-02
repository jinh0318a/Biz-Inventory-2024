package com.callor.inventory.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.GoodsDao;
import com.callor.inventory.dao.StoreDao;
import com.callor.inventory.model.GoodsVO;
import com.callor.inventory.model.ManagerVO;
import com.callor.inventory.model.StoreVO;

@Controller
@RequestMapping(value = "/goods")
public class GoodsController {

	private final GoodsDao goodsDao;
	private final StoreDao storeDao;

	public GoodsController(GoodsDao goodsDao, StoreDao storeDao) {
		super();
		this.goodsDao = goodsDao;
		this.storeDao = storeDao;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<GoodsVO> goodsList = goodsDao.findAllGoods();
		model.addAttribute("GOODS", goodsList);
		return null;
	}

	@RequestMapping(value = "/management", method = RequestMethod.GET)
	public String management(Model model, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/manager/login-manager";
		}
		String storecode = manager.getM_storecode();
		StoreVO storeVO = storeDao.findByCode(storecode);
		List<GoodsVO> goodsList = goodsDao.findByStoreCode(storecode);
		model.addAttribute("GOODS", goodsList);
		model.addAttribute("STORE", storeVO);
		return null;
	}

	@RequestMapping(value = "/input", method = RequestMethod.GET)
	public String input(String g_code, Model model, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/manager/login-manager";
		}
		GoodsVO good = goodsDao.findByCode(g_code);
		model.addAttribute("GOOD", good);
		return null;
	}

	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public String search(String store, String word, Model model) {
		if (word.isBlank() || word == null && store != null) {
			return "redirect:/goods/list-store?store=" + store;
		} else if ((word.isBlank() || word == null)) {
			return "redirect:/goods/list";
		}

		String findWord = "%" + word + "%";
		List<GoodsVO> goodsList = new ArrayList<>();
		String storename = "";
		if (store.equals("0")) {
			goodsList = goodsDao.searchByWord(findWord);
			storename = "전체";
		} else if (store.equals("1")) {
			goodsList = goodsDao.searchByStoreAndWord("S00001", findWord);
			storename = "둔산 직매장";
		} else if (store.equals("2")) {
			goodsList = goodsDao.searchByStoreAndWord("S00002", findWord);
			storename = "모악 직매장";
		} else if (store.equals("3")) {
			goodsList = goodsDao.searchByStoreAndWord("S00003", findWord);
			storename = "삼천 직매장";
		} else if (store.equals("4")) {
			goodsList = goodsDao.searchByStoreAndWord("S00004", findWord);
			storename = "하가 직매장";
		} else if (store.equals("5")) {
			goodsList = goodsDao.searchByStoreAndWord("S00005", findWord);
			storename = "효자 직매장";
		}
		model.addAttribute("GOODS", goodsList);
		model.addAttribute("WORD", word);
		model.addAttribute("STORE", storename);
		return null;
	}

	@RequestMapping(value = "/search-manager", method = RequestMethod.GET)
	public String searchManager(String word, Model model, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/manager/login-manager";
		}
		String storecode = manager.getM_storecode();
		StoreVO storeVO = storeDao.findByCode(storecode);
		String findWord = "%" + word + "%";
		List<GoodsVO> goodsList = goodsDao.searchByWordOrCode(storecode, findWord);
		model.addAttribute("GOODS", goodsList);
		model.addAttribute("STORE", storeVO);
		model.addAttribute("WORD", word);
		return null;
	}

	@RequestMapping(value = "/list-store", method = RequestMethod.GET)
	public String listStore(String store, Model model) {
		List<GoodsVO> goodsList = new ArrayList<>();
		String storename = "";
		if (store.equals("0")) {
			goodsList = goodsDao.findAllGoods();
			storename = "전체";
		} else if (store.equals("1")) {
			goodsList = goodsDao.findByStoreCode("S00001");
			storename = "둔산 직매장";
		} else if (store.equals("2")) {
			goodsList = goodsDao.findByStoreCode("S00002");
			storename = "모악 직매장";
		} else if (store.equals("3")) {
			goodsList = goodsDao.findByStoreCode("S00003");
			storename = "삼천 직매장";
		} else if (store.equals("4")) {
			goodsList = goodsDao.findByStoreCode("S00004");
			storename = "하가 직매장";
		} else if (store.equals("5")) {
			goodsList = goodsDao.findByStoreCode("S00005");
			storename = "효자 직매장";
		}
		model.addAttribute("GOODS", goodsList);
		model.addAttribute("STORE", storename);
		return null;
	}

	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String detail(String g_code, Model model) {
		GoodsVO good = goodsDao.findByCode(g_code);
		model.addAttribute("GOOD", good);
		return "/detail/detail";
	}

}