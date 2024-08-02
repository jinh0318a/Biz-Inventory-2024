package com.callor.inventory.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.callor.inventory.model.BoardVO;

public interface BoardDao {

	@Select("select * from tbl_board")
	public List<BoardVO> findAll();

	@Select("select * from tbl_board where b_code=#{b_code}")
	public BoardVO findByCode(String b_code);

	@Select("select * from tbl_board where b_writer=#{u_id}")
	public List<BoardVO> findByUserID(String u_id);

	@Select("select * from tbl_board where b_writer=#{m_id}")
	public List<BoardVO> findByManagerID(String m_id);

	@Delete("delete from tbl_board where b_code=#{b_code}")
	public int delete(String b_code);

	@Update("update tbl_board set b_title=#{b_title}, b_body=#{b_body} where b_code=#{b_code}")
	public int update(BoardVO boardVO);

	@Insert("insert into tbl_board(b_title, b_body, b_writer, b_writed_at) values(#{b_title},#{b_body},#{b_writer},#{b_writed_at})")
	public int insert(BoardVO boardVO);

}
