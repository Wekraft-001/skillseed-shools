interface PageMetadataProps {
  title?: string;
  description?: string;
}

export const PageMetadata = ({ 
  title = 'SkillSeed', 
  description = 'Empowering learning and growth through skill development' 
}: PageMetadataProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
