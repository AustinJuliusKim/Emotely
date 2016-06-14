json.array!(@emotes) do |emote|
  json.extract! emote, :id, :command, :url
  json.url emote_url(emote, format: :json)
end
