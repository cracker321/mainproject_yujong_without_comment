package com.example.seb_main_project.bookmark.entity;

import com.example.seb_main_project.audit.Auditable;
import com.example.seb_main_project.member.entity.Member;
import com.example.seb_main_project.post.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "BOOKMARK")
@NoArgsConstructor
public class Bookmark extends Auditable {
    @Id
    @Column(name = "BOOKMARK_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
