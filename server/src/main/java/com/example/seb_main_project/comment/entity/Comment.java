package com.example.seb_main_project.comment.entity;

import com.example.seb_main_project.audit.Auditable;
import com.example.seb_main_project.member.entity.Member;
import com.example.seb_main_project.post.entity.Post;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentId;

    @Column
    private String nickname;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String contents;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column
    private Integer likeCount;
}
